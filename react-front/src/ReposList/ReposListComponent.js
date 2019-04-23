//@flow
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import type {Repos} from '../redux/type';

interface Props {
  buttonClicked: boolean,
  loading: boolean,
  repos: Repos[]
}

const ReposListComponent = ({repos, buttonClicked, loading}: Props) => {
  return(
    <div className='main__repos--container'>
      {
        buttonClicked ?
          loading
            ? <CircularProgress className='main__progress' size={80} />
            : repos.map(item => <a key={item.id} href={item.html_url} className='main__repos'>{item.html_url}</a>)
          : null
      }
    </div>
  )
};

export default ReposListComponent;
