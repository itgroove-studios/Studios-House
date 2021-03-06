import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'StudiosHouseWebPartStrings';
import StudiosHouse from './components/StudiosHouse';
import { IStudiosHouseProps } from './components/IStudiosHouseProps';

export interface IStudiosHouseWebPartProps {
  description: string;
}

export default class StudiosHouseWebPart extends BaseClientSideWebPart<IStudiosHouseWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IStudiosHouseProps > = React.createElement(
      StudiosHouse,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
