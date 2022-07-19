import { Theme } from '@mui/material';

export const useStylesInfoCard = (theme: Theme) => ({
  label: {
    fontSize: '12px',
  },
  card: {
    backgroundColor: 'mediumseagreen',
  },
  cardContent: {
    padding: '8px',
    color: 'white',
  },
});
