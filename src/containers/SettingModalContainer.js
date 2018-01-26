import React from 'react';
import { connect } from 'react-redux';
import { Modal, Grid, Icon, Checkbox, Input, Dropdown, Button, Loader } from 'semantic-ui-react';
import { postSettings } from '../actions/setting.js';

//! :TODO 色々と終わっているので気持ちが落ち着いたら早めに直す
class SettingModalContainer extends React.Component {
  state = { modalOpen: false }

  alermSounds = [
    { key: 'Default', text: 'Default', value: 'Default' },
    { key: 'Youtube', text: 'Youtube', value: 'Youtube' },
    { key: 'TuneIn', text: 'TuneIn', value: 'TuneIn' }
  ];

  close = () => { this.setState({modalOpen: false}) }
  open = () => { this.setState({modalOpen: true}) }
  post = () => {
    this.props.dispatch(postSettings(this.props.userName, {
      alerm: {
        enabled: this.alermEnabledCheckBox.state.checked,
        sound: this.alermSoundDropdown.state.value,
        url: this.state.alerm ? this.state.alerm.url : this.props.settings.alerm.url
      }
    }));
  }

  render() {
    return (
      <Modal size="small" open={this.state.modalOpen} onClose={this.close} trigger={<Icon name="setting" size="large" onClick={this.open}/>}>
        <Modal.Header>Settings</Modal.Header>
        <Modal.Content>
          {
            this.props.loading
              ? <Loader active/>
              : (
                <Grid columns={2} >
                  <Grid.Row>
                    <Grid.Column>
                      <h3>Alerm</h3>
                    </Grid.Column>
                    <Grid.Column>
                      <Checkbox
                        toggle
                        ref={(Checkbox) => this.alermEnabledCheckBox = Checkbox}
                        defaultChecked={this.props.settings ? this.props.settings.alerm.enabled : false}/>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <h3>Alerm Sound</h3>
                    </Grid.Column>
                    <Grid.Column>
                      <Dropdown
                        fluid
                        selection
                        options={this.alermSounds}
                        placeholder="Select..."
                        ref={(Dropdown) => this.alermSoundDropdown = Dropdown}
                        defaultValue={this.props.settings ? this.props.settings.alerm.sound : "Default"}/>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <h3>URL</h3>
                    </Grid.Column>
                    <Grid.Column>
                      <Input
                        fluid
                        placeholder="Alerm sound URL..."
                        onChange={(_, data) => this.setState({...this.state, alerm: {...this.state.alerm, url: data.value}})}
                        defaultValue={this.props.settings ? this.props.settings.alerm.url : ""}/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              )
          }
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => this.close()}>Cancel</Button>
          <Button
            color="green"
            onClick={() => {
              this.post();
              this.close();
            }}>Save</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings.value,
    loading: state.settings ? state.settings.loading : false,
    userName: state.user.name
  }
}

export default connect(mapStateToProps)(SettingModalContainer);
