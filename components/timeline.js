import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool, FaHome } from 'react-icons/fa';
const Timeline = () => {
  const bgColor = useColorModeValue('#7e9296', '#2D3748');
  const textColor = useColorModeValue('#03045e', '#0077b6');
  const iconBgColorHome = useColorModeValue('rgb(33, 150, 243)', 'rgb(33, 150, 243)');
  const iconBgColorEducation = useColorModeValue('rgb(233, 30, 99)', 'rgb(233, 30, 99)');

  return (
    <Box
      padding="20px"
      bg={bgColor}
      color={textColor}
      borderRadius="20px"
      boxShadow="0px 0px 20px rgba(0, 0, 0, 0.1)"
    >
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
    </Box>
  );
};

export default Timeline;
