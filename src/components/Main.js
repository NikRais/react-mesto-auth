import React, { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) => {
    const currentUser = useContext(CurrentUserContext);
    const { name, about, avatar } = currentUser;
  
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__card">
            <img
              src={avatar}
              alt="Аватар"
              className="profile__avatar"
            />
            <button
              className="profile__avatar-button"
              onClick={onEditAvatar}
            ></button>
            <div className="profile__info">
              <h1 className="profile__name">{name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Изменить информацию"
                onClick={onEditProfile}
              ></button>
              <p className="profile__profession">{about}</p>
            </div>
          </div>
  
          <button
            className="profile__add-button"
            type="button"
            aria-label="Добавить"
            onClick={onAddPlace}
          ></button>
        </section>
  
        <section className="elements" aria-label="Карточки">
          {cards.map((card) => {
            return (
              <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike}
              onCardDelete={onCardDelete} />
            );
          })}
        </section>
      </main>
    );
  };
  
  export default Main;