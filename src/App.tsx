import React, {useEffect, useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import GitHubButton from 'react-github-btn';
import 'react-tabs/style/react-tabs.css';
import logo from './logo.svg';
import banner from './globannd.gif';
import liLogo from './LI-In-Bug.png';
import BannerHeader from './components/bannerheader';
import Timeline from './components/timeline';
import './App.css';

function App() {

  const tabStyling = {
    border: "solid",
    'margin-left': "10px"
  }

  const [pageName, setPageName] = useState("Kurt's Home");
  const [tabIndex, setTabIndex] = useState(0);
  const [tabPanelClass, setTabPanelClass] = useState('TabPanelActive')

  useEffect(() => {
    document.title = pageName;
  })

  const articleContents = <p></p>

  const setTab = (index : number) => {
    if (tabIndex > index) {
      setTabPanelClass('TabPanelRight')
    } else {
      setTabPanelClass('TabPanelLeft')
    }
    setTimeout(() => setTabPanelClass('TabPanelActive'), 1); // dumb but works
    setTabIndex(index)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <BannerHeader text={'Kurt\'s Homepage'} image={banner} textColor='black'></BannerHeader>
        <p>
          <Tabs selectedIndex={tabIndex} onSelect={(index)=> {setTab(index)}} >
            <TabList>
              <Tab style={tabStyling} onClick={() => setPageName("Kurt's Home")}>Home</Tab>
              <Tab style={tabStyling} onClick={() => setPageName("Kurt's CV")}>CV</Tab>
              <Tab style={tabStyling} onClick={() => setPageName("Kurt's Projects")}>Projects</Tab>
              <Tab style={tabStyling} onClick={() => setPageName("Kurt's Contact Info")}>Contact</Tab>
            </TabList>

            <TabPanel className={tabPanelClass}>
            <div className='textblockContainer'>
              <h2 style={{padding: '20px'}}>Welcome to My Site (v2)!</h2>
              <p style={{margin: '20px', padding: '20px'}}>
                This is the homepage for Kurt Gregorek. 
                Welcome.
              </p>
              </div>
            </TabPanel>

            <TabPanel className={tabPanelClass}>
              <Timeline articles={[{
                header: 'AutoLine AC',
                date: '2025-Present',
                contents: <p>Working on improvements to Auto Loan dashboard (Django, React), including improvements to automated reporting and Amazon API.</p>
              },
                {
                header: 'Fujifilm',
                date: '2021-2024',
                contents: <p>Did work on photo kiosk software (NodeJS/.NET). Worked on both the front end and backend teams.</p>
              }, {
                header: 'Worldpay (As part of FIS)',
                date: '2020',
                contents: <p>Worked on the intern team. Did work on the <a href='https://github.com/Vantiv'>customer facing SDKS</a> and some internal security improvements.</p>
              }]}></Timeline>
            </TabPanel>

            <TabPanel className={tabPanelClass}>
              <Timeline articles={[
                { header: 'Absolutely Understand Guitar Resources',
                  date: null,
                  contents: <div>
                      <p>Here are some tools based on <a href='https://www.absolutelyunderstandguitar.com/'>Absolutely Understand Guitar:</a></p>
                      <p><a href='/#/chordtrainer'>Chord Trainer</a></p>
                      <p><a href='/#/sliderule'>Slide Rule</a></p>
                    </div>
                }
              ]}></Timeline>
            </TabPanel>

            <TabPanel className={tabPanelClass}>
              <div className='textblockContainer' style={{}}><h2>Contact Me</h2>
              <ul style={{listStyleType: 'none', display: 'inline-block', textAlign: 'left'}}>
              <li className='contact-link'>
                <a href='mailto:kmgregorek@gmail.com'>For business inquiries contact kmgregorek@gmail.com</a>
              </li>
              <li className='contact-link'>
                <GitHubButton href="https://github.com/kmgreg" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Follow @kmgreg on GitHub">Follow @kmgreg</GitHubButton>
              </li>
              <li className='contact-link'> 
                <a href='https://www.linkedin.com/in/kurtgregorek/'><img src={liLogo} alt='linkedinlink' width='50' height='40'></img></a>
              </li>
              </ul>
              </div>
            </TabPanel>

          </Tabs>
        </p>
        </header>
    </div>
  );
}

export default App;
