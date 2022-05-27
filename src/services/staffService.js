import asyncPipe from '../lib/asyncPipe';
import log, { logFn } from '../lib/log';
import fetchStaffPipe from './pipes/fetchStaffPipe';
import filterStaffPipe from './pipes/filterStaffPipe';
import normalizeStaffPipe from './pipes/normalizeStaffPipe';
import paginateStaffPipe from './pipes/paginateStaffPipe';
import staffAPI from './staffAPI';
import staffDataTransform from './staffDataTransform';

const fetchStaffPipeline = [
  fetchStaffPipe,
  filterStaffPipe,
  paginateStaffPipe,
  normalizeStaffPipe,
].map(logFn);

const fetchStaff = (reqObj) => {
  return asyncPipe(...fetchStaffPipeline)(reqObj);
};

const fetchStaffMember = (id) =>
  staffAPI.fetchStaffMember(id).then(staffDataTransform.toStaffMember);

const staffService = {
  fetchStaff,
  fetchStaffMember: logFn(fetchStaffMember),
};

export default staffService;
