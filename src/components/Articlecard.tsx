import React from "react";
import styled from "styled-components";

interface Card {
  id: number;
  title: string;
  tag: string;
  liked: boolean;
  viewed: boolean;
  created_at: number;
}

export const Articlecard: React.FC<Card> = (Card) => {
  return (
    <section style={{ margin: 90 }}>
      <Carddiv>
        <Thumbnail>{Card.id}</Thumbnail>
        <Content>
          <Title>{Card.title}</Title>
          <Tag>{Card.tag}</Tag>
          <Footer>
            <Icons>
              <Icon>{Card.liked}</Icon>
              <Icon>{Card.viewed}</Icon>
            </Icons>
            <Time>{Card.created_at}</Time>
          </Footer>
        </Content>
      </Carddiv>
    </section>
  );
};

const Carddiv = styled.div`  
display: flex;
align-items: center;
background: white;
padding: 16px;
border: 1px solid #ddd;
border-radius: 8px;
width: 400px; /* カードの幅を設定 */
height: 200px; /* カードの高さを設定 */`;

const Thumbnail = styled.div`
width: 80px;
height: 80px;
background: #ccc;
border-radius: 8px;
margin-right: 16px;`;

const Content = styled.div`
display: flex;
flex-direction: column;
flex: 1;`;

const Title = styled.div`
font-size: 18px;
font-weight: bold;
margin-bottom: 8px;
`;

const Tag = styled.div`
display: inline-block;
background: #e0e0e0;
padding: 4px 8px;
border-radius: 4px;
font-size: 12px;
color: #555;
margin-bottom: 8px;`;

const Footer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: auto;
color: #999;`;

const Icons = styled.div`
display: flex;
gap: 8px`;

const Icon = styled.span`
font-size: 18px;`;

const Time = styled.span`
font-size: 14px;
color: #999;`;
