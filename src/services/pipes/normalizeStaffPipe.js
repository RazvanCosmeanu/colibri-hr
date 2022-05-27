import staffDataTransform from '../staffDataTransform';

const normalizeStaffPipe = (staffResponse) => {
  const normalizedEntries = staffDataTransform.normalizeStaffMembers(
    staffResponse.entries,
  );

  return { ...staffResponse, entries: normalizedEntries };
};

export default normalizeStaffPipe;
