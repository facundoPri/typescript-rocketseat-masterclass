import React from "react";

interface iUser {
  name: string;
  email?: string;
}

interface Props {
  user: iUser;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <strong>Nome: </strong> {user.name} <br />
      <strong>E-Mail: </strong> {user.email || "Não Possui E-mail"} <br />
      <br />
    </div>
  );
};

export default User;
