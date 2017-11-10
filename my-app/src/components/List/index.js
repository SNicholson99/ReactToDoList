import React from 'react';
import Toggle from 'material-ui/Toggle';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {purple50 as purple} from 'material-ui/styles/colors';

const List = (props) => {
  const style = {
    complete : {
      color : 'blue',
      'font-style': 'italic',
      'padding' : '30px'
    },
    notComplete : {
      color : 'red'
    },
    background: {
      'backgroundColor': purple
    }
  }
  const styles = {
    thumbSwitched: {
      backgroundColor: 'red',
    },
    trackSwitched: {
      backgroundColor: '#ff9d9d',
    },
  };

  return(
    <div>{props.todos.map((item, index) =>
         <Card style={style.background} key={index}>
            <CardHeader
              title={item.title}
            />
            <CardActions>
              <Toggle label={item.isComplete ? 'done...nice' : 'Cmon man do it'}
                      labelPosition="right"
                      onToggle={()=> props.onComplete(index)}
                      toggled={item.isComplete ? true : false}
                      thumbStyle={item.isComplete ? {}:styles.thumbSwitched}
                      trackStyle={styles.trackSwitched}
              />
              <FlatButton label="Delete" secondary={true} onClick={()=> props.onDelete(index)}/>
            </CardActions>
          </Card>

      )}
    </div>
  )
};





export default List;
