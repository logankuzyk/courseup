import { Box, Center, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { TermContext } from './app/context/TermContext';
import { Header, Content, SidebarContainer, Feedback } from './app/index';
import { getCurrentTerm } from './app/shared/utils/terms';
import { Term } from './fetchers';
import useWindowDimensions from './shared/hooks/useWindowDimensions';

export type SelectedCourse = {
  subject: string;
  code: string;
  pid: string;
  title: string;
};

function CalendarMobile(): JSX.Element {
  const [term, setTerm] = useState(getCurrentTerm());
  const [, setQuery] = useState('');

  const [selectedCourse] = useState<SelectedCourse>();

  const handleSearchChange = (q: string) => {
    setQuery(q);
  };

  return (
    <TermContext.Provider value={{ term, setTerm }}>
      <Flex h="100vh" direction="column">
        <Header onSearchChange={handleSearchChange} />
        <Box grow={1} overflow="hidden" height="100%">
          <Flex color="white" height="100%">
            <Flex minW="80%" overflow="auto" justifyContent="center" height="100%" boxShadow="lg" zIndex={56}>
              {selectedCourse ? (
                <Content term={term as Term} selectedCourse={selectedCourse} />
              ) : (
                <Center p="10">
                  <VStack>
                    <Heading color="black">Explore Courses</Heading>
                    <Text color="gray">
                      Select a subject and then a course to start viewing course details and section information.
                    </Text>
                  </VStack>
                </Center>
              )}
            </Flex>
          </Flex>
          <Box pos="absolute" bottom="0" right="0" zIndex={999} p={25}>
            <Feedback />
          </Box>
        </Box>
      </Flex>
    </TermContext.Provider>
  );
}

export function Calendar(): JSX.Element | null {
  const [isMobile, setIsMobile] = useState(false);
  const [term, setTerm] = useState(getCurrentTerm());
  const [query, setQuery] = useState('');

  const [selectedCourse, setSelectedCourse] = useState<SelectedCourse>();

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 480) setIsMobile(true);
    else setIsMobile(false);
  }, [width]);
  if (isMobile) return <CalendarMobile />;

  const handleSearchChange = (q: string) => {
    setQuery(q);
  };

  return (
    <TermContext.Provider value={{ term, setTerm }}>
      <Flex h="100vh" direction="column">
        <Header onSearchChange={handleSearchChange} />
        <Box grow={1} overflow="hidden" height="100%">
          <Flex color="white" height="100%">
            <SidebarContainer
              term={term as Term}
              onSelectedCourseChange={setSelectedCourse}
              selectedCourse={selectedCourse}
              searchQuery={query}
            />
            <Flex minW="80%" overflow="auto" justifyContent="center" height="100%" boxShadow="lg" zIndex={56}>
              {selectedCourse ? (
                <Content term={term as Term} selectedCourse={selectedCourse} />
              ) : (
                <Center p="10">
                  <VStack>
                    <Heading color="black">Explore Courses</Heading>
                    <Text color="gray">
                      Select a subject and then a course to start viewing course details and section information.
                    </Text>
                  </VStack>
                </Center>
              )}
            </Flex>
          </Flex>
          <Box pos="absolute" bottom="0" right="0" zIndex={999} p={25}>
            <Feedback />
          </Box>
        </Box>
      </Flex>
    </TermContext.Provider>
  );
}
