import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import {
  Title, Form, Repositories, Error,
} from './styles';

import githubExplorer from '../../assets/github-explorer.svg';

interface Repository {
    id: number;
    url: string;
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
    }
    description: string;
}

const Dashboard: React.FC = () => {
  const [newRepository, setNewRepository] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem('@GithubExplorer:repositories');
    return storageRepositories ? JSON.parse(storageRepositories) : [];
  });
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepository) {
      setInputError('Digite o autor/nome do repositório.');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepository}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setNewRepository('');

      setInputError('');
    } catch {
      setInputError('Não foi possivel buscar esse repositório.');
    }
  }

  return (
    <>
      <img src={githubExplorer} alt="Github Explorer" title="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepository}
          onChange={(e) => setNewRepository(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {
            repositories.map((repository) => (
              <Link key={repository.id} to={`/repository/${repository.full_name}`}>

                <img
                  src={repository.owner.avatar_url}
                  title={repository.owner.login}
                  alt={repository.owner.login}
                />

                <div>
                  <strong>{repository.full_name}</strong>
                  <p>{repository.description}</p>
                </div>

                <FiChevronRight size={23} />
              </Link>
            ))
        }
      </Repositories>
    </>
  );
};

export default Dashboard;
