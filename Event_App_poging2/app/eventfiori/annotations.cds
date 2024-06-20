using Event as service from '../../srv/service';

annotate service.Events with @(
    UI.FieldGroup #GeneratedGroup: {
        $Type: 'UI.FieldGroupType',
        Data: [
            {
                $Type: 'UI.DataField',
                Label: 'ID',
                Value: ID
            },
            {
                $Type: 'UI.DataField',
                Label: 'Title',
                Value: title
            },
            {
                $Type: 'UI.DataField',
                Label: 'Date',
                Value: date
            },
            {
                $Type: 'UI.DataField',
                Label: 'Description',
                Value: description
            }
        ]
    },
    UI.Facets: [
        {
            $Type: 'UI.ReferenceFacet',
            ID: 'GeneratedFacet1',
            Label: 'General Information',
            Target: '@UI.FieldGroup#GeneratedGroup'
        }
    ],
    UI.LineItem: [
        {
            $Type: 'UI.DataField',
            Label: 'ID',
            Value: ID
        },
        {
            $Type: 'UI.DataField',
            Label: 'Title',
            Value: title
        },
        {
            $Type: 'UI.DataField',
            Label: 'Date',
            Value: date
        },
        {
            $Type: 'UI.DataField',
            Label: 'Description',
            Value: description
        }
    ],
    UI.Identification: [
        {
            $Type: 'UI.DataField',
            Label: 'ID',
            Value: ID
        },
        {
            $Type: 'UI.DataField',
            Label: 'Title',
            Value: title
        },
        {
            $Type: 'UI.DataField',
            Label: 'Date',
            Value: date
        },
        {
            $Type: 'UI.DataField',
            Label: 'Description',
            Value: description
        }
    ],
    UI.HeaderInfo: {
        TypeName: 'Event',
        TypeNamePlural: 'Events',
        Title: {
            Value: title
        },
        Description: {
            Value: description
        }
    },
    UI.SelectionFields: [ID, title, date, description],
    Capabilities.InsertRestrictions: {
        Insertable: true
    },
    Capabilities.UpdateRestrictions: {
        Updatable: true
    },
    Capabilities.DeleteRestrictions: {
        Deletable: true
    }
);


