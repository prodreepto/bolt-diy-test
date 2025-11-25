import { FC } from 'react';
import { Icon } from 'lucide-react';

type SkillBadgeProps = {
  name: string;
  icon: Icon;
};

const SkillBadge: FC<SkillBadgeProps> = ({ name, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 bg-surface rounded-xl border border-border transition-all duration-300 hover:border-primary hover:bg-primary/10">
      <Icon className="w-10 h-10 text-primary" />
      <span className="font-medium text-text">{name}</span>
    </div>
  );
};

export default SkillBadge;
