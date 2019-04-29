import React, { Component } from 'react'
import { Dialog, Tab, Spinbox, Area, StyledText, Slider, Separator, render, Grid, ProgressBar, Window, App, Text, Box, Button, Checkbox, ColorButton, Form, TextInput, Group, Menu, Picker } from 'proton-native'

class Example extends Component {
  state = {
    count: 10
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 10
    })
  }

  render () {
    return (
      <App>
        <Menu label='Arquivos'>
          <Menu.Item>Menu 1 aqui top</Menu.Item>
        </Menu>
        <Window title='App Demo Fábio' margined >
          <Grid>

            <Box row={0} column={0}>
              <Text>Contador está em: {this.state.count}</Text>
              <Button onClick={this.addCount}>Add contador!</Button>
              <Checkbox>This is a checkbox</Checkbox>
              <ColorButton />
              <Separator />
              <ProgressBar value={this.state.count} />
              <Slider value={0} />
              <Spinbox value={10} />
              <Tab>
                <TextInput label='Tab1' />
                <TextInput label='Tab2' />
              </Tab>
            </Box>

            <Box row={0} column={1}>
              <Group title='Login'>
                <Form padded>
                  <TextInput label='Username' />
                  <TextInput label='Password' secure />
                  <Picker>
                    <Picker.Item>Option 1</Picker.Item>
                    <Picker.Item>Option 2</Picker.Item>
                    <Picker.Item>Option 3</Picker.Item>
                  </Picker>
                </Form>
              </Group>
              <StyledText style={{ fontSize: 16 }}>
                This is some text drawn onto an <StyledText style={{ color: 'red' }}>Area!</StyledText>
              </StyledText>
              <Area>
                <Area.Text style={{ fontSize: 16 }}>
                This is some text drawn onto an{' '}
                  <Area.Text style={{ color: 'red' }}>Area!</Area.Text>
                </Area.Text>
              </Area>
              <TextInput multiline padded />
            </Box>

          </Grid>
        </Window>
      </App>
    )
  }
}

render(<Example />)
