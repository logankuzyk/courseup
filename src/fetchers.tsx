/* Generated by restful-react */

import React from 'react';
import { Get, GetProps, useGet, UseGetProps } from 'restful-react';
export const SPEC_VERSION = 'undefined';
export interface Course {
  pid: string;
  title: string;
  subject: string;
  code: string;
}

export type Term = '202001' | '202005' | '202009' | '202101' | '202105';

export interface CourseDetails {
  pid: string;
  title: string;
  description: string;
  dateStart: string;
  credits: {
    chosen: string;
    value: string;
    credits: {
      max: string;
      min: string;
    };
  };
  /**
   * Abbriviation of the subject of the course.
   */
  subject: string;
  /**
   * The code portion of the course.
   */
  code: string;
  /**
   * If a course was named something else previously.
   */
  formally?: string;
}

export type LevelType = 'law' | 'undergraduate' | 'graduate';

export type SectionType = 'lecture' | 'lab' | 'tutorial';

export interface MeetingTimes {
  type: string;
  time: string;
  days: string;
  where: string;
  dateRange: string;
  scheduleType: string;
  instructors: string[];
}

export interface ClassScheduleListing {
  crn: string;
  sectionCode: string;
  additionalNotes?: string;
  associatedTerm: {
    end: string;
    start: string;
  };
  registrationDates: {
    end: string;
    start: string;
  };
  levels: LevelType[];
  campus: 'online' | 'in-person';
  sectionType: SectionType;
  instructionalMethod: string;
  credits: string;
  meetingTimes: MeetingTimes[];
}

export type Section = ClassScheduleListing;

export interface Seating {
  capacity: number;
  actual: number;
  remaining: number;
}

export type Classification = 'YEAR_1' | 'YEAR_2' | 'YEAR_3' | 'YEAR_4' | 'YEAR_5';

export interface Requirements {
  level: LevelType[];
  fieldOfStudy?: string[];
  classification?: Classification[];
}

export interface Seat {
  seats: Seating;
  waitListSeats: Seating;
  requirements?: Requirements;
  crn: string;
}

export interface KualiSubject {
  subject: string;
  title: string;
}

export type Subject = KualiSubject;

export interface GetCoursesQueryParams {
  in_session?: boolean;
}

export interface GetCoursesPathParams {
  term: Term;
}

export type GetCoursesProps = Omit<GetProps<Course[], unknown, GetCoursesQueryParams, GetCoursesPathParams>, 'path'> &
  GetCoursesPathParams;

/**
 * Retrieves all the courses available. If query params are passed in, they will be used to filter results.
 */
export const GetCourses = ({ term, ...props }: GetCoursesProps) => (
  <Get<Course[], unknown, GetCoursesQueryParams, GetCoursesPathParams> path={`/courses/${term}`} {...props} />
);

export type UseGetCoursesProps = Omit<
  UseGetProps<Course[], unknown, GetCoursesQueryParams, GetCoursesPathParams>,
  'path'
> &
  GetCoursesPathParams;

/**
 * Retrieves all the courses available. If query params are passed in, they will be used to filter results.
 */
export const useGetCourses = ({ term, ...props }: UseGetCoursesProps) =>
  useGet<Course[], unknown, GetCoursesQueryParams, GetCoursesPathParams>(
    (paramsInPath: GetCoursesPathParams) => `/courses/${paramsInPath.term}`,
    { pathParams: { term }, ...props }
  );

export interface GetCoursePathParams {
  term: Term;
  pid: string;
}

export type GetCourseProps = Omit<GetProps<CourseDetails, unknown, void, GetCoursePathParams>, 'path'> &
  GetCoursePathParams;

/**
 * Retrieves course details given the term and pid.
 */
export const GetCourse = ({ term, pid, ...props }: GetCourseProps) => (
  <Get<CourseDetails, unknown, void, GetCoursePathParams> path={`/courses/${term}/${pid}`} {...props} />
);

export type UseGetCourseProps = Omit<UseGetProps<CourseDetails, unknown, void, GetCoursePathParams>, 'path'> &
  GetCoursePathParams;

/**
 * Retrieves course details given the term and pid.
 */
export const useGetCourse = ({ term, pid, ...props }: UseGetCourseProps) =>
  useGet<CourseDetails, unknown, void, GetCoursePathParams>(
    (paramsInPath: GetCoursePathParams) => `/courses/${paramsInPath.term}/${paramsInPath.pid}`,
    { pathParams: { term, pid }, ...props }
  );

export interface SectionsQueryParams {
  subject: string;
  code: string;
}

export interface SectionsPathParams {
  term: Term;
}

export type SectionsProps = Omit<GetProps<Section[], void, SectionsQueryParams, SectionsPathParams>, 'path'> &
  SectionsPathParams;

export const Sections = ({ term, ...props }: SectionsProps) => (
  <Get<Section[], void, SectionsQueryParams, SectionsPathParams> path={`/sections/${term}`} {...props} />
);

export type UseSectionsProps = Omit<UseGetProps<Section[], void, SectionsQueryParams, SectionsPathParams>, 'path'> &
  SectionsPathParams;

export const useSections = ({ term, ...props }: UseSectionsProps) =>
  useGet<Section[], void, SectionsQueryParams, SectionsPathParams>(
    (paramsInPath: SectionsPathParams) => `/sections/${paramsInPath.term}`,
    { pathParams: { term }, ...props }
  );

export interface SeatsQueryParams {
  subject: string;
  code: string;
}

export interface SeatsPathParams {
  term: Term;
}

export type SeatsProps = Omit<GetProps<Seat[], void, SeatsQueryParams, SeatsPathParams>, 'path'> & SeatsPathParams;

export const Seats = ({ term, ...props }: SeatsProps) => (
  <Get<Seat[], void, SeatsQueryParams, SeatsPathParams> path={`/sections/${term}/seats`} {...props} />
);

export type UseSeatsProps = Omit<UseGetProps<Seat[], void, SeatsQueryParams, SeatsPathParams>, 'path'> &
  SeatsPathParams;

export const useSeats = ({ term, ...props }: UseSeatsProps) =>
  useGet<Seat[], void, SeatsQueryParams, SeatsPathParams>(
    (paramsInPath: SeatsPathParams) => `/sections/${paramsInPath.term}/seats`,
    { pathParams: { term }, ...props }
  );

export interface SubjectsPathParams {
  term: Term;
}

export type SubjectsProps = Omit<GetProps<Subject[], unknown, void, SubjectsPathParams>, 'path'> & SubjectsPathParams;

export const Subjects = ({ term, ...props }: SubjectsProps) => (
  <Get<Subject[], unknown, void, SubjectsPathParams> path={`/subjects/${term}`} {...props} />
);

export type UseSubjectsProps = Omit<UseGetProps<Subject[], unknown, void, SubjectsPathParams>, 'path'> &
  SubjectsPathParams;

export const useSubjects = ({ term, ...props }: UseSubjectsProps) =>
  useGet<Subject[], unknown, void, SubjectsPathParams>(
    (paramsInPath: SubjectsPathParams) => `/subjects/${paramsInPath.term}`,
    { pathParams: { term }, ...props }
  );