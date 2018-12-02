import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';

const styles = () => ({
  formControl: {
    display: 'block',
    spacePref: '',
    marginBottom: 20,
  },
  selectField: {
    minWidth: '60%',
  },
  fakeItem: {
    display: 'none',
  },
  textField: {
    display: 'block',
    marginBottom: 30,
  },
});

class FiltrationSurvey extends React.PureComponent {
  state = {
    gender: '',
    spacePref: '',
    guests: '',
    budget: '',
    services: {},
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCheckboxChange = (val) => {
    const newVal = !this.state.services[val];
    this.setState((state) => ({
      services: { ...state.services, [val]: newVal },
    }));
  }

  render() {
    const { classes, activeStep } = this.props;
    const { services } = this.state;
    return (
      <form className={classes.root} autoComplete="off">
        {activeStep === 0 && (
          <div id="form-section-1">
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend"> Ում ծննդյան տոնին եք պատրաստվում </FormLabel>
              <RadioGroup
                aria-label="Gender"
                name="gender"
                className={classes.group}
                value={this.state.gender}
                onChange={this.handleChange}
              >
                <FormControlLabel value="girl" control={<Radio />} label="Աղջիկ" />
                <FormControlLabel value="boy" control={<Radio />} label="Տղա" />
                <FormControlLabel value="both" control={<Radio />} label="Երկուսն էլ" />
              </RadioGroup>
            </FormControl>

            <FormControl className={classes.formControl}>
              <FormLabel component="legend">Ինչպիսի վայրում եք ցանկանում նշել այն</FormLabel>
              <Select
                value={this.state.spacePref}
                onChange={this.handleChange}
                inputProps={{
                  name: 'spacePref',
                  id: 'spacePref',
                }}
                className={classes.selectField}
              >
                <MenuItem value="" className={classes.fakeItem} />
                <MenuItem value={10}>Մանկական սրճարան</MenuItem>
                <MenuItem value={20}>Հայտնի ռեստորան</MenuItem>
                <MenuItem value={30}>Փոքրիկ ջերմ սրճարան</MenuItem>
                <MenuItem value={40}>Բացօթյա սրճարան</MenuItem>
                <MenuItem value={50}>Գեղեցիկ այգի</MenuItem>
                <MenuItem value={60}>Տանը</MenuItem>
              </Select>
            </FormControl>

            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend"> Քանի հյուր եք նախատեսում հրավիրել </FormLabel>
              <RadioGroup
                aria-label="Guests Number"
                name="guests"
                className={classes.group}
                value={this.state.guests}
                onChange={this.handleChange}
              >
                <FormControlLabel value="30" control={<Radio />} label="Մինչև 30" />
                <FormControlLabel value="50" control={<Radio />} label="30-50" />
                <FormControlLabel value="100" control={<Radio />} label="50-100" />
                <FormControlLabel value="200" control={<Radio />} label="100-200" />
                <FormControlLabel value="300" control={<Radio />} label="200 և ավելի" />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend"> Որքան բյուջե եք նախատեսում (AMD) </FormLabel>
              <RadioGroup
                aria-label="Preferred budget"
                name="budget"
                className={classes.group}
                value={this.state.budget}
                onChange={this.handleChange}
              >
                <FormControlLabel value="50" control={<Radio />} label="Մինչև 50,000" />
                <FormControlLabel value="100" control={<Radio />} label="51,000-100,000" />
                <FormControlLabel value="200" control={<Radio />} label="101,000-200,000" />
                <FormControlLabel value="400" control={<Radio />} label="200,000-400,000" />
                <FormControlLabel value="500" control={<Radio />} label="400,000 և ավելի" />
              </RadioGroup>
            </FormControl>
          </div>
        )}

        {activeStep === 1 && (
          <div id="form-section-2">
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend"> Ընտրեք այն ծառայությունները, որոնցից ցանկանում եք օգտվել </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={!!services.place} onChange={() => this.handleCheckboxChange('place')} value="place" />
                  }
                  label="Անցկացման Վայրը"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={!!services.decorations} onChange={() => this.handleCheckboxChange('decorations')} value="decorations" />
                  }
                  label="Տարածքի ձևավորում"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={!!services.cake} onChange={() => this.handleCheckboxChange('cake')} value="cake" />
                  }
                  label="Ծննդյան տորթ"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={!!services.dj} onChange={() => this.handleCheckboxChange('dj')} value="dj" />
                  }
                  label="DJ"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={!!services.effects} onChange={() => this.handleCheckboxChange('effects')} value="effects" />
                  }
                  label="Լուսային Էֆֆեկտներ"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={!!services.heroes} onChange={() => this.handleCheckboxChange('heroes')} value="heroes" />
                  }
                  label="Մուլտհերոսներ / խաղավարներ"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={!!services.balloons} onChange={() => this.handleCheckboxChange('balloons')} value="balloons" />
                  }
                  label="Փուչիկներ"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={!!services.photography} onChange={() => this.handleCheckboxChange('photography')} value="photography" />
                  }
                  label="Լուսանկարիչ"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={!!services.furniture} onChange={() => this.handleCheckboxChange('furniture')} value="furniture" />
                  }
                  label="Կահույքի վարձույթ"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={!!services.clothes} onChange={() => this.handleCheckboxChange('clothes')} value="clothes" />
                  }
                  label="Թեմատիկ զգեստների վարձույթ"
                />
              </FormGroup>
            </FormControl>
          </div>
        )}

        {activeStep === 2 && (
          <div id="form-section-2">
            <FormLabel component="legend">Որ օրն է տեղի ունենալու միջոցառումը</FormLabel>
            <TextField
              id="date"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <FormLabel component="legend">Որ ժամին եք ցանկանում միջոցառումը սկսվի</FormLabel>
            <TextField
              id="time"
              type="time"
              defaultValue="16:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />

            <FormLabel component="legend">Քանի ժամ եք նախատեսում տրամադրել միջոցառմանը</FormLabel>
            <TextField
              id="time"
              type="number"
              className={classes.textField}
            />
          </div>
        )}


      </form>
    );
  }
}

export default withStyles(styles)(FiltrationSurvey);
