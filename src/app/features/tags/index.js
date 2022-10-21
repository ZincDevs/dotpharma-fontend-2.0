/* eslint-disable import/prefer-default-export */
import { setTags } from './_tagSlice';
import { getTags as getTagsApi } from '../../../api';

export const getTags = dispatch => {
  dispatch(setTags({ status: 'pending' }));
  getTagsApi((err, data) => {
    if (err) {
      dispatch(setTags({ status: 'fail', message: 'Something went wrong.😞' }));
    } else {
      dispatch(setTags({ tags: data, status: 'success' }));
    }
  });
};
