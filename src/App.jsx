import Section from "./components/Section";
import SocialProfile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";
import user from "./json/user";
import data from "./json/data";
import friends from "./json/friends";
import transactions from "./json/transactions";

export default function App() {
  return (
    <div>
      <Section title={"1° Social network profile'"}>
        <SocialProfile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title={"2° Statistics section"}>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section>
        <Statistics stats={data} />
      </Section>

      <Section title={"3° Friend list"}>
        <FriendList friends={friends} />
      </Section>

      <Section title={"4° Transaction history"}>
        <TransactionHistory transactions={transactions} />
      </Section>
    </div>
  );
}
