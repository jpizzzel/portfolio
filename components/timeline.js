import React from 'react';
import styled from 'styled-components';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool, FaHome } from 'react-icons/fa';

const TimelineContainer = styled(Box)`
  padding: 20px;
  background-color: ${() => useColorModeValue('#7e9296', '#2D3748')}; /* Use colors from your Chakra UI theme */
  color: ${() => useColorModeValue('#03045e', '#0077b6')}; /* Light text color in light mode, dark text color in dark mode */
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
`;


const Timeline = () => {
  const iconBgColorHome = useColorModeValue('rgb(33, 150, 243)', 'rgb(33, 150, 243)');
  const iconBgColorEducation = useColorModeValue('rgb(233, 30, 99)', 'rgb(233, 30, 99)');

  return (
    <TimelineContainer>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--home"
          date="2005"
          iconStyle={{ background: iconBgColorHome, color: '#fff' }}
          icon={<FaHome />}
        >
          <h3>
              The Beginning
          </h3>
          <p>
              Born in Long Island, New York.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: iconBgColorEducation, color: '#fff' }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Earl L Vandermuelen High School</h3>
          <p>
            Finished my High School Education to then go on to Tufts University!
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--internship"
          date="2023-2027"
          iconStyle={{ background: iconBgColorEducation, color: '#fff' }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Tufts University</h3>
          <p>
            Studying Mechanical Engineering and Computer Science
          </p>
        </VerticalTimelineElement>
        {/* Add more timeline elements as needed */}
      </VerticalTimeline>
    </TimelineContainer>
  );
};

export default Timeline;
