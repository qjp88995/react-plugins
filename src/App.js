import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from 'react-router-dom';
import styles from './App.module.scss';
import Carousel from './components/Carousel';
import Xlsx2json from './components/Xlsx2json';
import ArtTemplate from './components/ArtTemplate';
import Docx from './components/Docx';
import Jszip from './components/Jszip';
import DocxPreviewer from './components/DocxPreviewer';

const Li = ({ to, label, activeOnlyWhenExact }) => {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li className={match ? styles.active : ''}>
      <Link to={to}>{label}</Link>
    </li>
  );
}

function App() {
  const menus = [
    { to: '/carousel', label: 'Carousel' },
    { to: '/xlsx2json', label: 'Xlsx2json' },
    { to: '/art-template', label: 'ArtTemplate' },
    { to: '/docx', label: 'Docx' },
    { to: '/jszip', label: 'Jszip' },
    { to: '/docx-previewer', label: 'DocxPreviewer' },
  ];
  return (
    <Router>
      <div className={styles.app}>
        <nav>
          <ul>
            {menus.map(item => (
              <Li key={item.to} { ...item } />
            ))}
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/carousel">
              <Carousel />
            </Route>
            <Route path="/xlsx2json">
              <Xlsx2json url="/test.xlsx" />
            </Route>
            <Route path="/art-template">
              <ArtTemplate />
            </Route>
            <Route path="/docx">
              <Docx />
            </Route>
            <Route path="/jszip">
              <Jszip />
            </Route>
            <Route path="/docx-previewer">
              <DocxPreviewer />
            </Route>
            <Route path="/" exact render={() => (<Redirect to="/carousel" />)} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
