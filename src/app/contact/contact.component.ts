import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import AOS from 'aos';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { getLocaleDateTimeFormat, NgClass } from '@angular/common';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  code = ''
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  isSubmit = true;
  submitMessage = '';
  private contactForm: AngularFirestoreCollection<any>;
  
  constructor(private formBuilder: FormBuilder,private firestore: AngularFirestore) {
   }

  ngOnInit() {
    this.contactForm = this.firestore.collection('contact')
    this.createForm();
    // this.setChangeValidate()
    AOS.init()
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)],
      //  this.checkInUseEmail
      ],
      'name': [null, Validators.required],
      // 'password': [null, [Validators.required, 
      //   // this.checkPassword
      // ]],
      'description': [null, [Validators.required,  
        // Validators.maxLength(10)
      ],
      // Validators.minLength(5),
    ],
      'date': new Date()

    });
  }


  get name() {
    return this.formGroup.get('name') as FormControl
  }


  getErrorEmail() {
    return this.formGroup.get('email')?.hasError('required') ? 'This field is required' :
      this.formGroup.get('email')?.hasError('pattern') ? 'Not a valid emailaddress' :
        this.formGroup.get('email')?.hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  

  onSubmit(post:any) {

    this.post = post;
    console.log(post);
    this.contactForm.add(post).then(res=>{
      // throw new Error('Something bad happened');
      this.submitMessage = 'Submitted successfully';
      this.code = 'success'
    })
    .catch(err=>{
      console.log(err)
      this.submitMessage = err;
      this.code = 'danger'

    })

    console.log(this.submitMessage)

    this.isSubmit=true;
    setTimeout(()=>{
      this.isSubmit=false;
      window.location.reload();
    },7000);
      // this.formGroup.reset()

    

  }





  // setChangeValidate() {
  //   this.formGroup.get('validate')?.valueChanges.subscribe(
  //     (validate) => {
  //       if (validate == '1') {
  //         this.formGroup.get('name')?.setValidators([Validators.required, Validators.minLength(3)]);
  //         this.titleAlert = "You need to specify at least 3 characters";
  //       } else {
  //         this.formGroup.get('name')?.setValidators(Validators.required);
  //       }
  //       this.formGroup.get('name')?.updateValueAndValidity();
  //     }
  //   )
  // }

  // checkPassword(control:any) {
  //   let enteredPassword = control.value
  //   let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  //   return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  // }

  // checkInUseEmail(control:any) {
  //   // mimic http database access
  //   let db = ['tony@gmail.com'];
  //   return new Observable(observer => {
  //     setTimeout(() => {
  //       let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
  //       observer.next(result);
  //       observer.complete();
  //     }, 4000)
  //   })
  // }

  // getErrorPassword() {
  //   return this.formGroup.get('password')?.hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
  //     this.formGroup.get('password')?.hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  // }
}
