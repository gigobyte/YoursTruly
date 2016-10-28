import React from 'react'
import Paper from 'material-ui/Paper'

class Home extends React.Component {
    render() {
        const style = {
            title: {
                textAlign: 'center',
                fontSize: 70,
                fontFamily: 'Satisfy'
            },
            description: {
                textAlign: 'center',
                fontSize: 25,
                paddingBottom: 80
            },
            skill: {
                textAlign: 'center',
                height: 150,
                width: 150,
                position: 'relative',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white'
            },
            image: {
                width: 120,
                paddingTop: 15
            }
        }

        return (
        <div>
            <div style={style.title}>Hello, stranger!</div>
            <p style={style.description}>
                My name is Stanislav Iliev and I'm a developer and JavaScript enthusiast. <br></br>
                I'm fascinated by all aspects of programming, but during the past couple of years <br></br>
                I've focused myself on developing web applications. <br></br>
                During the journey to find my calling I acquired quite a large amount of skills, check them out:
            </p>
            <div>
                <Paper style={style.skill} zDepth={2}><img style={style.image} src="images/python.png"></img><br></br></Paper>
            </div>
        </div>
        )
    }
}

export default Home
