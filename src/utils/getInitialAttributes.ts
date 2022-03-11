import { IAttributes } from 'types/component';

export const initialAttributes: { [key: string]: IAttributes } = {
  Contact: {
    title: 'Contact',
    description:
      'Here is a section to display your contact infos and tell more your user about the possible inquiries and project you could to together.',
    reversed: false,
    height: '400',
    textColor: 'black',
    bgColor: 'white',
    mail: 'estelle.gresillon@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/estellegresillon',
    instagram: 'https://www.instagram.com/estelle.gresillon',
    dribbble: 'https://dribbble.com/estellegresillon',
    other: 'estellegresillon.fr',
    resizable: true,
  },
  Gallery: {
    columns: '3',
    itemCount: '9',
    hasColGap: false,
    colGap: '5',
    hasSectionGap: false,
    resizable: false,
  },
  Hero: {
    title: 'This is a title for your hero scene',
    subtitle: 'This is a subtitle for your hero scene',
    textColor: 'white',
    buttonColor: '#b57e6b',
    alignment: { alignItems: 'center', justifyContent: 'center' },
    resizable: false,
  },
  Partners: {
    itemCount: '5',
    height: '200',
    resizable: true,
  },
  Section: {
    title: 'A catchphrase for your section',
    description: 'A little text description',
    textColor: 'black',
    bgColor: 'white',
    alignment: { alignItems: 'center', justifyContent: 'center' },
    resizable: false,
    reversed: false,
    hasSectionGap: false,
  },
  TextBlock: {
    title: 'A catchphrase for your section',
    description: 'A little text description',
    textColor: 'black',
    bgColor: 'white',
    alignment: { alignItems: 'center', justifyContent: 'center' },
    height: '300',
    resizable: true,
  },
};
