let csv: ColumnDescriptor[] = [
    {
    name: "ID",
    type: ID,
    validators: [
    length(1,4),
    require,
    ]
    },
    {
    name: "Name",
    type: "string",
    validators: [
    length(1,18),
    ]
    },
    {
    name: "Surname",
    type: "string",
    validators: [
    length(1,18),
    ]
    },
    {
    name: "Mail",
    type: Mail,
    validators: [
    length(6,18),
    ]
    },
    {
    name: "Date of Registration",
    type: "date",
    validators: [
    fooValidator
    ]
    },
    {
    name: "Phone",
    type: Phone,
    validators: [
    length(14,16),
    ]
    },
    ]
    
    
    interface CsvType {
    parseString(str: string): this;
    }
    
   
    interface CsvType {
        parseString(str: string): this;
        }

    interface ColumnDescriptor {
        name: string,
        type: CsvType | string,
        validators: Validators[]
        }
    interface Validators<T> {
        /** if return empty array then object valid */
         validate(value: T) : string[];         
    }