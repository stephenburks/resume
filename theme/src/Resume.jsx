const React = require('react');
const styled = require('styled-components').default;
const {
  Section,
  SectionTitle,
  DateRange,
  ContactInfo,
  Link,
} = require('@resume/core');
const ThemeToggle = require('./ThemeToggle');
const { useTheme } = require('./useTheme');

const Layout = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 50px;
  background: ${(p) => p.theme.background};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    sans-serif;
  color: ${(p) => p.theme.text};
  line-height: 1.7;
  transition: background 0.2s ease, color 0.2s ease;

  @media print {
    padding: 40px;
  }

  @media (max-width: 640px) {
    padding: 40px 20px;
  }
`;

const Header = styled.header`
  margin-bottom: 48px;
  padding-bottom: 24px;
  border-bottom: 3px solid ${(p) => p.theme.headerBorder};
  position: relative;
`;

const Name = styled.h1`
  font-size: 48px;
  font-weight: 700;
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  color: ${(p) => p.theme.text};
  margin: 0 0 12px 0;
  letter-spacing: -1px;
`;

const Label = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: 'JetBrains Mono', monospace;
  color: ${(p) => p.theme.accent};
  margin: 0 0 20px 0;
  letter-spacing: 0.5px;
`;

const StyledContactInfo = styled(ContactInfo)`
  font-size: 15px;
  color: ${(p) => p.theme.muted};
  margin-bottom: 20px;

  a {
    font-size: 15px;
    color: ${(p) => p.theme.accent};
    text-decoration: none;
    font-family: 'JetBrains Mono', monospace;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Summary = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${(p) => p.theme.textSecondary};
  margin: 20px 0 0 0;
  max-width: 750px;
`;

const StyledSection = styled(Section)`
  margin-bottom: 48px;
`;

const StyledSectionTitle = styled(SectionTitle)`
  font-size: 20px;
  font-weight: 700;
  font-family: 'JetBrains Mono', monospace;
  color: ${(p) => p.theme.text};
  margin: 0 0 24px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 8px 0;
  border-bottom: 2px solid ${(p) => p.theme.sectionTitleBorder};
  display: inline-block;
  min-width: 200px;

  &::before {
    content: '# ';
    color: ${(p) => p.theme.accent};
  }
`;

const WorkItem = styled.div`
  margin-bottom: 36px;
  padding-left: 20px;
  border-left: 3px solid ${(p) => p.theme.border};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    border-left-color: ${(p) => p.theme.borderHover};
  }
`;

const WorkHeader = styled.div`
  margin-bottom: 12px;
`;

const WorkTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 8px;
`;

const Position = styled.h3`
  font-size: 18px;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
  color: ${(p) => p.theme.text};
  margin: 0;
`;

const Company = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${(p) => p.theme.accent};
  margin-top: 4px;
`;

const StyledDateRange = styled(DateRange)`
  font-size: 14px;
  font-family: 'JetBrains Mono', monospace;
  color: ${(p) => p.theme.muted};
`;

const WorkSummary = styled.p`
  margin: 12px 0;
  color: ${(p) => p.theme.textTertiary};
  line-height: 1.7;
  font-size: 15px;
`;

const HighlightsList = styled.ul`
  margin: 12px 0 0 0;
  padding-left: 20px;
  list-style: none;

  li {
    position: relative;
    margin-bottom: 8px;
    padding-left: 0;
    color: ${(p) => p.theme.textSecondary};
    line-height: 1.7;

    &::before {
      content: '→';
      position: absolute;
      left: -20px;
      color: ${(p) => p.theme.accent};
      font-weight: bold;
    }
  }
`;

const EducationItem = styled.div`
  margin-bottom: 28px;
  padding: 20px;
  background: ${(p) => p.theme.cardBg};
  border-left: 3px solid ${(p) => p.theme.accent};
  border-radius: 2px;
  transition: background 0.2s ease;

  &:last-child {
    margin-bottom: 0;
  }
`;

const EducationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`;

const Degree = styled.h3`
  font-size: 17px;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
  color: ${(p) => p.theme.text};
  margin: 0;
`;

const Institution = styled.div`
  font-size: 15px;
  color: ${(p) => p.theme.muted};
  margin-top: 4px;
`;

const StudyType = styled.div`
  font-size: 14px;
  color: ${(p) => p.theme.accent};
  margin-top: 4px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
`;

const SkillCard = styled.div`
  padding: 16px;
  background: ${(p) => p.theme.cardBg};
  border: 1px solid ${(p) => p.theme.border};
  border-radius: 2px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(p) => p.theme.borderHover};
    background: ${(p) => p.theme.cardBgHover};
  }
`;

const SkillName = styled.h4`
  font-size: 15px;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
  color: ${(p) => p.theme.text};
  margin: 0 0 10px 0;
`;

const KeywordList = styled.div`
  font-size: 13px;
  color: ${(p) => p.theme.muted};
  line-height: 1.6;
`;

const ProjectItem = styled.div`
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid ${(p) => p.theme.border};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 12px;
`;

const ProjectName = styled.h3`
  font-size: 17px;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
  color: ${(p) => p.theme.text};
  margin: 0 0 8px 0;
`;

const ProjectDescription = styled.p`
  font-size: 15px;
  color: ${(p) => p.theme.textTertiary};
  line-height: 1.7;
  margin: 0;
`;

const ProjectHighlights = styled.ul`
  margin: 12px 0 0 0;
  padding-left: 20px;
  list-style: none;

  li {
    position: relative;
    margin-bottom: 6px;
    padding-left: 0;
    color: ${(p) => p.theme.textTertiary};
    font-size: 14px;

    &::before {
      content: '•';
      position: absolute;
      left: -20px;
      color: ${(p) => p.theme.accent};
    }
  }
`;

const SimpleList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

const SimpleItem = styled.div`
  padding: 16px;
  background: ${(p) => p.theme.cardBg};
  border-left: 2px solid ${(p) => p.theme.accent};
  border-radius: 2px;
  transition: background 0.2s ease;
`;

const ItemTitle = styled.h4`
  font-size: 15px;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
  color: ${(p) => p.theme.text};
  margin: 0 0 8px 0;
`;

const ItemMeta = styled.div`
  font-size: 13px;
  color: ${(p) => p.theme.muted};
  margin-bottom: 6px;
`;

const ItemDescription = styled.p`
  font-size: 14px;
  color: ${(p) => p.theme.textTertiary};
  margin: 8px 0 0 0;
  line-height: 1.6;
`;

function Resume({ resume }) {
  var themeHook = useTheme();
  var theme = themeHook.theme;
  var toggle = themeHook.toggle;

  var basics = resume.basics || {};
  var work = resume.work || [];
  var education = resume.education || [];
  var skills = resume.skills || [];
  var projects = resume.projects || [];
  var volunteer = resume.volunteer || [];
  var awards = resume.awards || [];
  var publications = resume.publications || [];
  var languages = resume.languages || [];
  var interests = resume.interests || [];
  var references = resume.references || [];

  return React.createElement(Layout, null,
    React.createElement(Header, null,
      React.createElement(ThemeToggle, { theme: theme, onToggle: toggle }),
      React.createElement(Name, null, basics.name),
      basics.label && React.createElement(Label, null, basics.label),
      React.createElement(StyledContactInfo, { basics: basics }),
      basics.summary && React.createElement(Summary, null, basics.summary)
    ),

    work.length > 0 && React.createElement(StyledSection, { key: 'work' },
      React.createElement(StyledSectionTitle, null, 'Experience'),
      work.map(function(job, index) {
        return React.createElement(WorkItem, { key: index },
          React.createElement(WorkHeader, null,
            React.createElement(WorkTitle, null,
              React.createElement('div', null,
                React.createElement(Position, null, job.position),
                React.createElement(Company, null, job.name)
              ),
              React.createElement(StyledDateRange, {
                startDate: job.startDate,
                endDate: job.endDate
              })
            )
          ),
          job.summary && React.createElement(WorkSummary, null, job.summary),
          job.highlights && job.highlights.length > 0 && React.createElement(HighlightsList, null,
            job.highlights.map(function(highlight, i) {
              return React.createElement('li', {
                key: i,
                dangerouslySetInnerHTML: { __html: highlight }
              });
            })
          )
        );
      })
    ),

    skills.length > 0 && React.createElement(StyledSection, { key: 'skills' },
      React.createElement(StyledSectionTitle, null, 'Skills'),
      React.createElement(SkillsGrid, null,
        skills.map(function(skill, index) {
          return React.createElement(SkillCard, { key: index },
            React.createElement(SkillName, null, skill.name),
            skill.keywords && skill.keywords.length > 0 && React.createElement(KeywordList, null, skill.keywords.join(' \u2022 '))
          );
        })
      )
    ),

    education.length > 0 && React.createElement(StyledSection, { key: 'education' },
      React.createElement(StyledSectionTitle, null, 'Education'),
      education.map(function(edu, index) {
        return React.createElement(EducationItem, { key: index },
          React.createElement(EducationHeader, null,
            React.createElement('div', null,
              React.createElement(Degree, null, edu.area),
              edu.studyType && React.createElement(StudyType, null, edu.studyType),
              React.createElement(Institution, null, edu.institution)
            ),
            React.createElement(StyledDateRange, {
              startDate: edu.startDate,
              endDate: edu.endDate
            })
          ),
          edu.score && React.createElement(ItemMeta, null, 'GPA: ', edu.score),
          edu.courses && edu.courses.length > 0 && React.createElement(ItemDescription, null, edu.courses.join(', '))
        );
      })
    ),

    projects.length > 0 && React.createElement(StyledSection, { key: 'projects' },
      React.createElement(StyledSectionTitle, null, 'Projects'),
      projects.map(function(project, index) {
        return React.createElement(ProjectItem, { key: index },
          React.createElement(ProjectHeader, null,
            React.createElement(ProjectName, null,
              project.url ? React.createElement(Link, { href: project.url }, project.name) : project.name
            ),
            project.description && React.createElement(ProjectDescription, null, project.description)
          ),
          project.highlights && project.highlights.length > 0 && React.createElement(ProjectHighlights, null,
            project.highlights.map(function(highlight, i) {
              return React.createElement('li', { key: i }, highlight);
            })
          )
        );
      })
    ),

    volunteer.length > 0 && React.createElement(StyledSection, { key: 'volunteer' },
      React.createElement(StyledSectionTitle, null, 'Volunteer'),
      React.createElement(SimpleList, null,
        volunteer.map(function(vol, index) {
          return React.createElement(SimpleItem, { key: index },
            React.createElement(ItemTitle, null, vol.position),
            React.createElement(ItemMeta, null,
              vol.organization,
              vol.startDate && React.createElement(React.Fragment, null,
                ' \u2022 ',
                React.createElement(DateRange, {
                  startDate: vol.startDate,
                  endDate: vol.endDate
                })
              )
            ),
            vol.summary && React.createElement(ItemDescription, null, vol.summary)
          );
        })
      )
    ),

    awards.length > 0 && React.createElement(StyledSection, { key: 'awards' },
      React.createElement(StyledSectionTitle, null, 'Awards'),
      React.createElement(SimpleList, null,
        awards.map(function(award, index) {
          return React.createElement(SimpleItem, { key: index },
            React.createElement(ItemTitle, null, award.title),
            React.createElement(ItemMeta, null,
              award.awarder,
              award.date && React.createElement(React.Fragment, null, ' \u2022 ', award.date)
            ),
            award.summary && React.createElement(ItemDescription, null, award.summary)
          );
        })
      )
    ),

    publications.length > 0 && React.createElement(StyledSection, { key: 'publications' },
      React.createElement(StyledSectionTitle, null, 'Publications'),
      publications.map(function(pub, index) {
        return React.createElement(ProjectItem, { key: index },
          React.createElement(ProjectHeader, null,
            React.createElement(ProjectName, null,
              pub.url ? React.createElement(Link, { href: pub.url }, pub.name) : pub.name
            ),
            React.createElement(ItemMeta, null,
              pub.publisher,
              pub.releaseDate && React.createElement(React.Fragment, null, ' \u2022 ', pub.releaseDate)
            )
          ),
          pub.summary && React.createElement(ProjectDescription, null, pub.summary)
        );
      })
    ),

    languages.length > 0 && React.createElement(StyledSection, { key: 'languages' },
      React.createElement(StyledSectionTitle, null, 'Languages'),
      React.createElement(SimpleList, null,
        languages.map(function(lang, index) {
          return React.createElement(SimpleItem, { key: index },
            React.createElement(ItemTitle, null, lang.language),
            lang.fluency && React.createElement(ItemMeta, null, lang.fluency)
          );
        })
      )
    ),

    interests.length > 0 && React.createElement(StyledSection, { key: 'interests' },
      React.createElement(StyledSectionTitle, null, 'Interests'),
      React.createElement(SimpleList, null,
        interests.map(function(interest, index) {
          return React.createElement(SimpleItem, { key: index },
            React.createElement(ItemTitle, null, interest.name),
            interest.keywords && interest.keywords.length > 0 && React.createElement(ItemDescription, null, interest.keywords.join(', '))
          );
        })
      )
    ),

    references.length > 0 && React.createElement(StyledSection, { key: 'references' },
      React.createElement(StyledSectionTitle, null, 'References'),
      references.map(function(ref, index) {
        return React.createElement(ProjectItem, { key: index },
          React.createElement(ItemTitle, null, ref.name),
          ref.reference && React.createElement(ItemDescription, null, ref.reference)
        );
      })
    )
  );
}

module.exports = Resume;
