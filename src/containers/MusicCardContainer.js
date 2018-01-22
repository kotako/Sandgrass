import React from 'react';
import { connect } from 'react-redux';
import { Card, Embed, Input } from 'semantic-ui-react';
import { setAlerm } from '../actions/timer.js';

const MusicCardContainer = ({ dispatch, counting, remain, url }) => {
  let input;
  return (
    <Card style={{minWidth: "400px"}}>
      <Card.Content>
        <Card.Header>
          Music
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <form onSubmit={ e => {
          e.preventDefault();
          dispatch(setAlerm(input));
        }}>
          <Input
            fluid
            placeholder={url ? url : 'TuneIn URL'}
            onChange={(_, data) => input = data.value} />
        </form>
        <Embed source='tunein' url={url} active={!counting && ([0, 600, 1500, 3000].indexOf(remain)>0)}/>
      </Card.Content>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    remain: state.timer.remain,
    counting: state.timer.counting,
    url: state.timer.url
  }
}

export default connect(mapStateToProps)(MusicCardContainer);
