import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    {
      "name": "John Doe",
      "department": "Marketing",
      "employmentDate": "01/15/2022",
      "salary": 50000,
      "experience": 5
    },
    {
      "name": "Jane Smith",
      "department": "Human Resources",
      "employmentDate": "08/20/2021",
      "salary": 60000,
      "experience": 2
    },
    {
      "name": "Mike Johnson",
      "department": "Finance",
      "employmentDate": "02/10/2023",
      "salary": 70000,
      "experience": 1
    },
    {
      "name": "Sarah Adams",
      "department": "Sales",
      "employmentDate": "05/01/2020",
      "salary": 55000,
      "experience": 3
    },
    {
      "name": "David Brown",
      "department": "IT",
      "employmentDate": "11/05/2022",
      "salary": 65000,
      "experience": 2
    },
    {
      "name": "Emily Wilson",
      "department": "Operations",
      "employmentDate": "04/12/2021",
      "salary": 55000,
      "experience": 4
    },
    {
      "name": "Michael Davis",
      "department": "Finance",
      "employmentDate": "07/02/2022",
      "salary": 75000,
      "experience": 6
    },
    {
      "name": "Jennifer Lee",
      "department": "Sales",
      "employmentDate": "09/30/2020",
      "salary": 60000,
      "experience": 2
    },
    {
      "name": "Daniel Wilson",
      "department": "Marketing",
      "employmentDate": "03/15/2023",
      "salary": 55000,
      "experience": 7
    },
    {
      "name": "Amy Johnson",
      "department": "Human Resources",
      "employmentDate": "06/10/2021",
      "salary": 65000,
      "experience": 1
    },
    {
      "name": "Robert Smith",
      "department": "IT",
      "employmentDate": "09/25/2022",
      "salary": 70000,
      "experience": 4
    },
    {
      "name": "Olivia Davis",
      "department": "Operations",
      "employmentDate": "12/05/2020",
      "salary": 60000,
      "experience": 2
    }
  ]
  
  ;

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }
}
