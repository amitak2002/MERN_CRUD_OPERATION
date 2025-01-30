import express , {Router} from 'express'
import { newUser , getUsers , singleUser, deleteUser , updateUser} from '../controller/userController.js'


const router = Router()

router.post('/newuser' , newUser)  // post new data in database
router.get('/getusers' , getUsers)
router.get('/:id' , singleUser) // take data from database
router.delete('/deleteuser/:id' , deleteUser)  // delete data from database
router.patch('/updateuser/:id' , updateUser) // patch and put used to update data in database
// put me entire resource update krna padta hai {name : , age : , email : dabhi ko jo model me hoga} or patch me partially update krne ke liye use karte hai {name :  } ya {name : , age : }
// best patch hota hai

export default router