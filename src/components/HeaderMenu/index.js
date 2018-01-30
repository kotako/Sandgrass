import React from 'react';
import { Menu } from 'semantic-ui-react';
import SettingModalContainer from '../../containers/SettingModalContainer';

const HeaderMenu = () => (
  <Menu inverted>
    <Menu.Item onClick={ () => {}}>
      <SettingModalContainer/>
    </Menu.Item>
  </Menu>
)

export default HeaderMenu;
