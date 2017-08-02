interface CheckBoxList {
    checkboxes: Array<CheckBox>;
}

interface CheckBox {
    disabled?: boolean;
    label: string;
    name: string;
    value: string;
}