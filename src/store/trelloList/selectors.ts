import { AppState } from '../index';
import { CardModel } from '../../models/CardModel';
import { TrelloListProps } from '../../components/TrelloList';

export const getCardListById = (state: AppState, ownProns: TrelloListProps): Array<CardModel> => {
    const {cardList} = state.card;
    const filteredList = cardList.filter(card => card.idList === ownProns.id);
    return cardList ? filteredList : [];
};
