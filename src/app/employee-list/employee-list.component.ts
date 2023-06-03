import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';
import { Filter } from '../models/filter.model';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [DatePipe]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  filters: Filter = {
    name: '',
    department: '',
    employmentDate: null,
    salary: null,
    experience: []
  };

  constructor(private datePipe: DatePipe,private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      this.applyFilters();
    });
  }
  applyFilters(): void {
    this.filteredEmployees = this.employees.filter((employee) => {
      // Apply filter conditions based on this.filters values
      if (this.filters.name && !employee.name.toLowerCase().includes(this.filters.name.toLowerCase())) {
        return false;
      }
      
      if (this.filters.department && employee.department !== this.filters.department) {
        return false;
      }
      
      if (this.filters.employmentDate) {
        const filterEmploymentDate = new Date(this.filters.employmentDate);
        const employeeEmploymentDate = employee.employmentDate ? new Date(employee.employmentDate) : null;
  
        // Remove the time component from the dates
        filterEmploymentDate.setHours(0, 0, 0, 0);
        if (employeeEmploymentDate) {
          employeeEmploymentDate.setHours(0, 0, 0, 0);
        }
        
        if (employeeEmploymentDate && employeeEmploymentDate < filterEmploymentDate) {
          return false;
        }
      }
      
      if (this.filters.salary && employee.salary && employee.salary !== this.filters.salary) {
        return false;
      }
      
      
      if (this.filters.experience.length > 0) {
        if (
          this.filters.experience.includes('Less than a year') && employee.experience >=1
        ) {
          return false;
        }
        if (
          this.filters.experience.includes('1-3 years')  && (employee.experience < 1 || employee.experience > 3)
        ) {
          return false;
        }
        if (
          this.filters.experience.includes('3 years or above')  && employee.experience < 3
        ) {
          return false;
        }
      }      
      return true;
    });
  
    // Format time values using DatePipe
    this.filteredEmployees.forEach((employee) => {
      if (employee.employmentDate) {
        employee.employmentDate = this.datePipe.transform(employee.employmentDate, 'MM-dd-yyyy');
      }
    });
  }
  
  
  

  clearFilters(): void {
    this.filters = {
      name: '',
      department: '',
      employmentDate: null,
      salary: null,
      experience: []
    };
    this.applyFilters();
  }
}
