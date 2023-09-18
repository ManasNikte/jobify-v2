import { Router } from 'express';
import { validateIdParam, validateJobInput } from '../middleware/validationMiddleware.js';
const router = Router();

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from '../controllers/jobController.js';
import { checkForTestUser } from '../middleware/authmiddleware.js';

// router.get('/', getAllJobs);
// router.post('/', createJob);

router
  .route('/')
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);
router
  .route('/stats')
  .get(showStats)
router
  .route('/:id')
  .get(validateIdParam, getJob)
  .patch(checkForTestUser, validateJobInput, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);
export default router;