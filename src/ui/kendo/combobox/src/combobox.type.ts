import { Component, ChangeDetectionStrategy, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@ngx-formly/kendo/form-field';
import { FormlyFieldSelectProps } from '@ngx-formly/core/select';

interface ComboboxProps extends FormlyFieldProps, FormlyFieldSelectProps {
  primitive?: boolean;
  filterable: boolean;
  minFilter: number;
  filterOperator: string;
  filter: (field: string,operator: string,value: any)=> void;
}

export interface FormlyComboboxFieldConfig extends FormlyFieldConfig<ComboboxProps> {
  type: 'combobox' | Type<FormlyFieldCombobox>;
}

@Component({
  selector: 'formly-field-kendo-combobox',
  template: `
    <kendo-combobox
      [formControl]="formControl"
      [formlyAttributes]="field"
      [data]="props.options | formlySelectOptions : field | async"
      [textField]="'label'"
      [valueField]="'value'"
      [valuePrimitive]="props.primitive ?? true"
      [filterable]="props.filterable"
      (filterChange)="handleFilter($event)"
      (valueChange)="props.change && props.change(field, $event)"
    >
    </kendo-combobox>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCombobox extends FieldType<FieldTypeConfig<ComboboxProps>> {

  handleFilter(value: any) {
    if (value.length >= this.props.minFilter) {
      this.field.props?.filter(
        "label",
        this.props.filterOperator,
        value
      );
    }
  }
}
