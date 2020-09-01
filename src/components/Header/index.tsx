import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GithubLogo, SearchForm } from './styles';
import { ThemeName } from '../../styles/themes';

interface HeaderProps {
  themeName: ThemeName
  setThemeName: (newName: ThemeName) => void
}

const Header: React.FC<HeaderProps> = ({ themeName, setThemeName}) => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent){
    event.preventDefault();

    navigate('/' + search.trim())

    setSearch('')

  }

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light')
  }

  return (
    <Container>
        <GithubLogo onClick={toggleTheme}/>

        <SearchForm onSubmit={handleSubmit}>
          <input 
            placeholder="Enter Username or Repo..." 
            type="text" 
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </SearchForm>
    </Container>  
  );
}

export default Header;