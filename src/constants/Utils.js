import { Platform, StatusBar, Dimensions } from 'react-native';
import { theme } from 'galio-framework';

export const StatusHeight = StatusBar.currentHeight;
export const HeaderHeight = (theme.SIZES.BASE * 3.5 + (StatusHeight || 0));
export const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812);
export const width = Dimensions.get("window").width
export const height = Dimensions.get("window").height

export const Abreviar = (nometodo) => {
  var pattern = / de | do | dos | da | das | e /i
  var nome = nometodo.replace(pattern, ' ');
  var nome = nome.split(' ');

  var nomes_meio = ' ';
  if (nome.length > 2) {
    for (var x = 1; x < nome.length - 1; x++) {
      nomes_meio += nome[x][0] + '. ';
    }
    if(nome.length > 3){
      nomes_meio = ''
    }
  }

  return `${nome[0]} ${nomes_meio} ${nome[nome.length - 1]}`;
}