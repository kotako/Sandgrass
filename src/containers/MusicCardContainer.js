import React from 'react';
import { connect } from 'react-redux';
import { Card, Embed, Input, Button } from 'semantic-ui-react';
import { setAlerm, switchAlerm } from '../actions/timer.js';
import YoutubePlayer from '../components/YoutubePlayer';

const MusicCardContainer = ({ dispatch, counting, remain, url, playing }) => {
  let input;
  return (
    <Card style={{minWidth: "400px"}}>
      <Card.Content>
        <Card.Header>
          Alerm
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <form onSubmit={ e => {
          e.preventDefault();
          dispatch(setAlerm(input));
        }}>
          <Input
            fluid
            placeholder='TuneIn URL'
            onChange={(_, data) => input = data.value} />
        </form>
      </Card.Content>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    remain: state.timer.remain,
    counting: state.timer.counting,
    url: state.timer.url,
    playing: state.timer.counting ? false : state.timer.playing
  }
}

export default connect(mapStateToProps)(MusicCardContainer);
