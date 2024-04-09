import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
addDoc,
Firestore,
collection,
getDocs,
doc,
updateDoc,
deleteDoc,

} from '@angular/fire/firestore'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-firebase';
  constructor(public firestore: Firestore) {

   }

   addData(value: any) {
    const dbInstance = collection (this.firestore,'users')
    addDoc(dbInstance, value)
    .then(() => {
      alert('Data Sent')
    })
    .catch((err) => { 
      alert(err.message)
    })
  }

    getData() {
      const dbInstance = collection(this.firestore,'users');
      getDocs(dbInstance)
      .then((response) => {
        this.data = [... response.docs.map((item)=>
          {
            return {...item.data(),id: item.id}
          })]
   
    })
  }
updateData (id:string) {
  const dataToUpdate = doc(this.firestore,'users', id); 
  updateDoc(dataToUpdate, {
    name: 'Ashish',
    email: 'Ashish94@gmail.com',
  })
  .then(()=> {
    alert('Data updated')
  })
  .catch((err) => {
    alert(err.message)
  })
}

deleteData() {
  const dataTodelete = doc(this.firestore,'users', id);
  deleteDoc(dataTodelete)

  .then(()=> {
    alert('Data Deleted')
  })
  .catch((err) => {
    alert(err.message)
  })
}

   }



  //  handleRegister(value: any) {
  //   createUserWithEmailAndPassword(this.auth, value.email, value.password,)
  //   .then((response:any) => {
  //     console.log(response.user)
  //   })
  //   .catch((err) => {
  //     alert(err.message);
  //   })
  //  }

  // handleLogin(value: any) {
  //   signInWithEmailAndPassword(this.auth, value.email, value.password)
  //   .then((response: any) => {
  //     console.log(response.user)
  //   })
  //     .catch((err) => {
  //     alert(err.message);
  //   })
  // }


