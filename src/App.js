import React, {useState} from 'react';
import {Menu, Layout, Button} from 'antd';
import MyCarousel from './components/MyCarousel';
import './App.css';
import CreativityIntroduction from "./components/CreativityIntroduction";
import InteractiveSpace from "./components/InteractiveSpace";
import CardComponent from "./components/CardComponent";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const {Header, Sider, Content} = Layout;


const items = [
  {key: '1', label: 'Introduction'},
  {key: '2', label: 'Elements of creativity'},
  {key: '3', label: 'Types'},
  {key: '4', label: 'How to be creative'},
  {key: '5', label: 'Where to start'},
  {key: '6', label: 'Interactive space'},
];

const menuContent = {
  '1': {
    title: 'Introduction',
    content: [],
  },
  '2': {
    title: 'Elements of creativity',
    content: [
      {
        textTitle: '',
        textToDisplay: 'Inspiration',
        imageSrc: 'That spark or moment that gets you excited to create or do something',
      },

      {
        textTitle: '',
        textToDisplay: 'Vision',
        imageSrc: 'The ability to dream up what you want your future to look like',
      },

      {
        textTitle: '',
        textToDisplay: 'Idea',
        imageSrc: 'A cool thought that pops into your head about how to make or do something',
      },

      {
        textTitle: '',
        textToDisplay: 'Brainstorm',
        imageSrc: 'Throwing out all kinds of ideas to see what sticks',
      },

      {
        textTitle: '',
        textToDisplay: 'Mind',
        imageSrc: 'The part of you that thinks, dreams, and figures things out',
      },

      {
        textTitle: '',
        textToDisplay: 'Imagination',
        imageSrc: 'Letting your brain wander and create things that aren’t real (yet!)',
      },

      {
        textTitle: '',
        textToDisplay: 'Innovation',
        imageSrc: 'Coming up with something new and awesome that makes things better',
      },

      {
        textTitle: '',
        textToDisplay: 'Motivation',
        imageSrc: 'The energy or reason that pushes you to get stuff done',
      },
    ],
  },
  '3': {
    title: 'Types',
    content: [
      {
        textTitle: 'Divergent Creativity',
        textToDisplay:
            'Ability to generate multiple, outside-the-box ideas, solutions, and perspectives in a short amount of time. ' +
            'Key words: unconventional, groundbreaking ideas',
        imageSrc: '/images/divergent.jfif',
      },
      {
        textTitle: 'Convergent Creativity',
        textToDisplay:
            'Focuses on refining and selecting the most promising ideas or solutions generated through divergent thinking. ' +
            'Key words: critical thinking, evaluation',
        imageSrc: '/images/020-Convergent-vs-Divergent.jpg',
      },
      {
        textTitle: 'Lateral Creativity',
        textToDisplay:
            'Involves making connections between seemingly unrelated concepts or domains. ' +
            'Key words: innovation, connections, unique solutions',
        imageSrc: '/images/lateral-thinking-1.jpg',
      },
      {
        textTitle: 'Emotional Creativity',
        textToDisplay: 'Taps into the power of emotions to express ideas ' +
            'and experiences in special and meaningful ways, being able to understand them. ' +
            'Key words: empathy, collaboration, genuine connection',
        imageSrc: '/images/emot.png',
      },
      {
        textTitle: 'Adaptive Creativity',
        textToDisplay:
            'Ability to adapt and innovate in response to changing circumstances or constraints. ' +
            'Key words: flexible, resourceful, resilient',
        imageSrc: '/images/adaptive.jpeg',
      },
    ],
  },
  '4': {
    title: 'How to be creative',
    content: [],
  },
  '6': {
    title: 'Interactive space',
    content: [],
  },
  '5': {
    title: 'Where to start',
    content: [],
  },
};

const creativityTips = [
  {title: 'Practice', details: 'Practicing creativity daily can enhance your skills and unlock new ideas.'},
  {title: 'Quality', details: 'Focus on quality over quantity for your creative projects.'},
  {title: 'Experiment', details: 'Trying out new techniques and methods promotes innovation.'},
  {title: 'Confidence', details: 'Believing in your abilities allows creativity to flow more freely.'},
  {title: 'Refresh', details: 'Taking breaks and refreshing your mind helps with creative thinking.'},
  {title: 'Just be yourself', details: 'Authenticity is the foundation of true creativity.'},
];

const startingPoint = [
  {
    title: '1) Seek Inspiration',
    details: 'Look for inspiration in books, art, nature, and other creative works to spark your ideas.'
  },
  {
    title: '2) Start with Passion',
    details: 'Discover what excites you the most and begin your creative journey with enthusiasm.'
  },
  {
    title: '3) Explore Your Interests',
    details: 'Try different activities and explore various areas of creativity to find your niche.'
  },
  {
    title: '4) Set Clear Goals',
    details: 'Define your objectives and outline the steps to achieve them, helping you stay focused.'
  },

  {
    title: '5) Start Small',
    details: 'Begin with small, manageable projects and expand from there.'
  },
  {
    title: '6) Embrace Mistakes',
    details: 'Don’t fear failure—every mistake is an opportunity to learn and improve your creative process.'
  },
];

const App = () => {
  const [selectedContent, setSelectedContent] = useState(menuContent['1']);

  const [collapsed, setCollapsed] = useState(false);


  const onClick = (e) => {
    setSelectedContent(menuContent[e.key] || {title: '', content: []});
  };


  return (
      <Layout style={{minHeight: '100vh'}}>
        <Header
            style={{
              background: 'linear-gradient(to right, #FF8080, #F8F8AB)',
              color: '#F5EFE7',
              textAlign: 'center',
              fontSize: '28px',
              fontFamily: "'Playwrite AU SA', serif",
              padding: '2px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Add shadow for depth
            }}
        >
         Your Starting Point in Creativity
        </Header>
        <Layout>
          <Sider width={256} style={{background: '#FF8080'}} collapsed={collapsed}>

            <Menu
                theme="dark"
                onClick={onClick}
                className="my_menu"
                defaultSelectedKeys={['1']}
                mode="inline"
                items={items}
                style={{
                  background: '#FF8080',
                  fontSize: '16px', // Larger text for better readability
                }}
            />

            {/* Toggle Button */}
            <Button
                type="primary"
                shape="circle"
                icon={collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
                size="middle"
                style={{
                  margin: '20px auto',
                  display: 'block', // Center the button
                  backgroundColor: '#FF8080', // Different color for toggle button
                  border: 'none', // Remove border
                }}
                onClick={() => setCollapsed(!collapsed)}
            />
          </Sider>

          <Content
              style={{
                padding: '16px',
                background: 'linear-gradient(to right top, #fcffe7, #fcfbe2, #fcf7dc, #fdf2d7, #fdeed3, #fde8cc, #fee2c6, #ffdbc1, #ffd0b9, #ffc6b4, #ffbbb1, #ffb0b0)',
                overflow: 'auto',
              }}
          > {
            selectedContent.title === 'Interactive space' ? (
                    <InteractiveSpace/>)
                : selectedContent.title === 'How to be creative' ? (
                        <CardComponent cardsData={creativityTips}/>)
                    : selectedContent.title === 'Where to start' ? (
                            <CardComponent cardsData={startingPoint}/>)
                        : selectedContent.title === 'Introduction' ? (
                                <CreativityIntroduction/>)
                            : (
                                <MyCarousel content={selectedContent.content}/>
                            )
          }
          </Content>
        </Layout>
      </Layout>
  );
};

export default App;
