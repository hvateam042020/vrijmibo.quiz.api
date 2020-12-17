import { Router } from 'express'

const router = Router()

router.post('/')

router.get('/all')

router.get('/:id')

router.patch('/:id')

router.delete('/:id')

export default router;

