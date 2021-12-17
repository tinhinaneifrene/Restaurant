import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  reservationForm = this.fb.group({
    date: new Date(),
    time :"",
    people:1
  });
  isReservation = false;

  client ={firstName:"", lastName:"", email:"", telNumber:""};
  date =  new Date();
  timeOptions = ["12:00", "12:30","13:00", "13:30", "19:00", "19:30", "20:00", "20:30"];
  peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private fb : FormBuilder) { }


  ngOnInit(): void 
  {
  }

  finalizeReservation(formValue:object)
  {
    console.log(formValue);
  }

  saveReservation()
  {
    if(this.reservationForm.valid)
    {
      console.log(this.reservationForm);
      this.isReservation = true;
    }
  }

}
