import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import {
  Header, RepositoryInfo, Issues, Error,
} from './styles';

import githubExplorer from '../../assets/github-explorer.svg';

interface RepositoryParams {
    repository: string;
}

interface Repository {
    id: number;
    url: string;
    full_name: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    }
    description: string;
}

interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string
    }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [repositoryError, setRepositoryError] = useState('');
  const [issuesError, setIssuesError] = useState('');

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(
      (response) => setRepository(response.data),
      () => setRepositoryError('Não foi possível exibir as informações desse repositório.'),
    );

    api.get(`repos/${params.repository}/issues`).then(
      (response) => setIssues(response.data),
      () => setIssuesError('Não foi possível exibir as issues desse repositório.'),
    );
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={githubExplorer} alt="Github Explorer" title="Github Explorer" />
        <Link to="/">
          <FiChevronLeft fontWeight="bold" size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository?.owner.avatar_url}
              alt={repository?.owner.avatar_url}
              title={repository?.owner.avatar_url}
            />
            <div>
              <h1>
                {repository?.full_name}
              </h1>
              <p>
                {repository?.description}
              </p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository?.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository?.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository?.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      {repositoryError && <Error>{repositoryError}</Error>}

      {issues.length > 0 && (
        <Issues>
            {issues.map((issue) => (
              <a key={issue.id} href={issue.html_url} target="blank">

                <div>
                  <strong>{issue.title}</strong>
                  <p>{issue.user.login}</p>
                </div>

                <FiChevronRight size={23} />
              </a>
            ))}
        </Issues>
      )}

      {issuesError && <Error>{issuesError}</Error>}

    </>
  );
};

export default Repository;
