import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.scss';
import { FcSportsMode, FcMusic } from 'react-icons/fc';
import { FaRobot, FaRupeeSign } from 'react-icons/fa';
import { GiConsoleController } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
const Timeline = () => {
  return (
    <div className="timeline_wrapper" id="register">
      <h1>Events</h1>
      <VerticalTimeline lineColor="#ff99ff">
        <NavLink to={'/sports'}>
          <VerticalTimelineElement
            className='element1'
            style={{
              marginBottom: '50px',
            }}
            iconStyle={{ background: 'black', color: '#fff', scale: '1.4' }}
            icon={<FcSportsMode></FcSportsMode>}
            contentArrowStyle={{ borderRight: '10px solid  #182848' }}
            contentStyle={{
              cursor: 'pointer',
              background: 'linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))',
              height: '100px',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '40px',
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}
            position={'left'}
          >
            <h1>Sports</h1>
          </VerticalTimelineElement>
        </NavLink>

        <NavLink to={'/technical'}>
          <VerticalTimelineElement
          style={{
            marginBottom: '50px',
          }}
            iconStyle={{ background: 'black', color: '#fff', scale: '1.4' }}
            icon={<FaRobot />}
            contentArrowStyle={{ borderRight: '10px solid  #dc2424' }}
            contentStyle={{
              cursor: 'pointer',
              background: 'linear-gradient(to right, #dc2424, #4a569d)',
              height: '100px',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '40px',
              fontWeight: 'bold',
              fontStyle: 'italic',
              // boxShadow:
              //   '#4a569d 0px 1px 1px 0px inset, #4a569d 0px 50px 100px -20px, #dc2424 0px 30px 60px -30px',
            }}
            position={'right'}
          >
            <h1>Technical</h1>
          </VerticalTimelineElement>
        </NavLink>

        <NavLink to={'/gaming'}>
        <VerticalTimelineElement
          style={{
            marginBottom: '50px',
          }}
          iconStyle={{ background: 'black', color: '#fff', scale: '1.4' }}
          icon={<GiConsoleController></GiConsoleController>}
          contentArrowStyle={{ borderRight: '10px solid  #514a9d' }}
          contentStyle={{
            cursor: 'pointer',
            background: 'linear-gradient(to right, #24c6dc, #514a9d)',
            height: '100px',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '40px',
            fontWeight: 'bold',
            fontStyle: 'italic',
          }}
          position={'left'}
        >
          <h1>Gaming</h1>
        </VerticalTimelineElement>
        </NavLink>

        <NavLink to={'/business'}>
        <VerticalTimelineElement
          style={{
            marginBottom: '50px',
          }}
          iconStyle={{ background: 'black', color: '#fff', scale: '1.4' }}
          contentArrowStyle={{ borderRight: '10px solid  #5f2c82' }}
          icon={<FaRupeeSign />}
          contentStyle={{
            cursor: 'pointer',
            background: 'linear-gradient(to right, #5f2c82, #49a09d)',
            height: '100px',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '40px',
            fontWeight: 'bold',
            fontStyle: 'italic',
          }}
          position={'right'}
        >
          <h1>Business</h1>
        </VerticalTimelineElement>
        </NavLink>

        <NavLink to={'/cultural'}>
        <VerticalTimelineElement
          style={{
            marginBottom: '50px',
          }}
          iconStyle={{ background: 'black', color: '#fff', scale: '1.4' }}
          contentArrowStyle={{ borderRight: '10px solid  #ffedbc' }}
          icon={<FcMusic />}
          contentStyle={{
            cursor: 'pointer',
            background: 'linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))',
            height: '100px',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '40px',
            fontWeight: 'bold',
            fontStyle: 'italic',
          }}
          position={'left'}
        >
          <h1>Cultural</h1>
        </VerticalTimelineElement>
        </NavLink>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
