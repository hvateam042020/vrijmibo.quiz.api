import { Router } from 'express'

const router = Router()

router.post('/')

router.get('/all')

router.get('/:id')

router.post(':id')

export default router;

