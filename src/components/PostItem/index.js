import React from "react"

import * as S from "./styled"

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemWrapper>
      <S.PostItemTag background="#61728F">DEV</S.PostItemTag>
      <S.PortItemInfo>
        <S.PostItemDate>31 de Agosto de 2021 • 4 min de leitura</S.PostItemDate>
        <S.PostItemTitle>useState - React Hooks</S.PostItemTitle>
        <S.PostItemDescription>
          Manipulando States com useState - React Hooks
        </S.PostItemDescription>
      </S.PortItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
