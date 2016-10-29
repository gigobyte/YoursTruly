import React from 'react'
import Highlight from 'react-highlight'

class Home extends React.Component {
    render() {
        const style = {
            title: {
                textAlign: 'center',
                fontSize: 60,
                fontFamily: 'Satisfy'
            },
            description: {
                textAlign: 'center',
                fontSize: 18
            },
            skill: {
                textAlign: 'center',
                width: 600,
                position: 'relative',
                left: '50%',
                transform: 'translate(-50%, 0)'
            },
            contacts: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            image: {
                width: 50,
                paddingRight: 10
            }
        }

        return (
            <div>
                <div style={style.title}>Hello, stranger!</div>
                <p style={style.description}>
                    My name is Stanislav Iliev and I'm a developer and JavaScript enthusiast. <br></br>
                    I'm fascinated by all aspects of programming, but during the past couple of years <br></br>
                    I've focused myself on developing web applications. <br></br><br></br><br></br>
                    This page is written in React and Express, check out the <a href="https://github.com/gigobyte/YoursTruly">source</a>.<br></br>
                    Other things I have experience with include:
                </p>
                <div style={style.skill}>
                    <Highlight className='javascript'>
                        {"const ofCourse = () => 'I know JavaScript'"}
                    </Highlight>
                </div>
                <div style={style.skill}>
                    <Highlight className='javascript'>
                        {"let frameworks = ['AngularJS', 'React', 'Meteor', 'jQuery']"}
                    </Highlight>
                </div>
                <div style={style.skill}>
                    <Highlight className='python'>
                        {"def some(): return 'Python too!'"}
                    </Highlight>
                </div>
                <div style={style.skill}>
                    <Highlight className='javascript'>
                        {`db.collection('Me').insertOne({knows: ['MongoDB', 'MySQL']})`}
                    </Highlight>
                </div>
                <div style={style.skill}>
                    <Highlight className='javascript'>
                        {`describe('Me', () => it('likes TDD and is looking for a challenge'))`}
                    </Highlight>
                </div>
                <div style={style.skill}>
                    <p style={{paddingTop: 20, fontSize: 18}}>And many more, if you are interested you can check me out on</p>
                </div>

                <div style={style.contacts}>
                    <a href="https://www.linkedin.com/in/stanislav-iliev-09aa89123">
                        <img style={style.image} src="images/linkedin.png"></img>
                    </a>
                    <a href="https://github.com/gigobyte">
                        <img style={style.image} src="images/github.png"></img>
                    </a>
                    <p style={{fontSize: 18}}>or plain old email at s.iliev3@gmail.com</p>
                </div>
            </div>
        )
    }
}

export default Home
