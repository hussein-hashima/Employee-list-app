import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filter } from '../models/filter.model';

@Component({
  selector: 'app-filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.css']
})
export class FiltersPanelComponent {
  @Input() filters: Filter = {
    name: '',
    department: '',
    employmentDate: null,
    salary: null,
    experience: []
  };
  @Output() applyFilters: EventEmitter<void> = new EventEmitter<void>();
  @Output() clearFilters: EventEmitter<void> = new EventEmitter<void>();

  onApplyFilters(): void {
    this.applyFilters.emit();
  }

  onClearFilters(): void {
    this.clearFilters.emit();
  }
  
}
