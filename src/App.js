import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from 'react-router-dom';
import styles from './App.module.scss';
import Carousel from './components/Carousel';
import Xlsx2json from './components/Xlsx2json';
import ArtTemplate from './components/ArtTemplate';
import Docx from './components/Docx';
import Jszip from './components/Jszip';
import DocxPreviewer from './components/DocxPreviewer';
import Book from './components/Book';
import Background from './components/Background';
import Canvas from './components/Canvas';

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
  const routes = [
    { path: '/carousel', title: 'Carousel', component: Carousel },
    { path: '/xlsx2json', title: 'Xlsx2json', component: Xlsx2json },
    { path: '/art-template', title: 'ArtTemplate', component: ArtTemplate },
    { path: '/docx', title: 'Docx', component: Docx },
    { path: '/jszip', title: 'Jszip', component: Jszip },
    { path: '/docx-previewer', title: 'DocxPreviewer', component: DocxPreviewer },
    { path: '/book', title: 'Book', component: Book },
    { path: '/background', title: 'Background', component: Background },
    { path: '/canvas', title: 'Canvas', component: Canvas },
  ];
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={styles.app}>
        <nav>
          <ul>
            {routes.map(item => (
              <Li key={item.path} to={item.path} label={item.title} />
            ))}
          </ul>
        </nav>
        <main>
          <Switch>
            {routes.map(item => (
              <Route key={item.path} path={item.path}>
                <item.component />
              </Route>
            ))}
            <Route path='/' exact render={() => (<Redirect to={routes[0].path} />)} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
