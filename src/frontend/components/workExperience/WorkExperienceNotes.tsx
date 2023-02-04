export type WorkExperienceNotesProps = {
  notes: string[];
};

export const WorkExperienceNotes: React.FC<WorkExperienceNotesProps> = ({
  notes,
}) => {
  return (
    <>
      {notes.map((note) => (
        <ul key={note}>
          <li>{note}</li>
        </ul>
      ))}
    </>
  );
};
