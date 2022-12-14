import * as React from "react";
import _ from "lodash";
import { FcCalendar } from "react-icons/fc";
import {
  ChakraProvider,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Text,
  useOutsideClick,
  VStack,
  Flex,
  InputGroup,
  InputLeftElement,
  Center
} from "@chakra-ui/react";
import {
  DateObj,
  useDayzed,
  RenderProps,
  GetBackForwardPropsOptions,
  Calendar
} from "dayzed";
import * as dateFns from "date-fns";

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DATE_FORMAT = "dd/MM/yyyy";

interface SingleDatepickerBackButtonsProps {
  calendars: Calendar[];
  getBackProps: (data: GetBackForwardPropsOptions) => Record<string, any>;
}

const SingleDatepickerBackButtons = (
  props: SingleDatepickerBackButtonsProps
) => {
  const { calendars, getBackProps } = props;
  return (
    <>
      <Button
        {...getBackProps({
          calendars,
          offset: 12
        })}
        variant="ghost"
        size="sm"
      >
        {"<<"}
      </Button>
      <Button {...getBackProps({ calendars })} variant="ghost" size="sm">
        {"<"}
      </Button>
    </>
  );
};

interface SingleDatepickerForwardButtonsProps {
  calendars: Calendar[];
  getForwardProps: (data: GetBackForwardPropsOptions) => Record<string, any>;
}

const SingleDatepickerForwardButtons = (
  props: SingleDatepickerForwardButtonsProps
) => {
  const { calendars, getForwardProps } = props;
  return (
    <>
      <Button {...getForwardProps({ calendars })} variant="ghost" size="sm">
        {">"}
      </Button>
      <Button
        {...getForwardProps({
          calendars,
          offset: 12
        })}
        variant="ghost"
        size="sm"
      >
        {">>"}
      </Button>
    </>
  );
};

const SingleDatepickerCalendar = (props: RenderProps) => {
  const { calendars, getDateProps, getBackProps, getForwardProps } = props;

  if (_.isEmpty(calendars)) {
    return null;
  }

  return (
    <Box>
      <Center>
        <HStack spacing={6} alignItems="baseline">
          {_.map(calendars, (calendar) => {
            return (
              <VStack key={`${calendar.month}${calendar.year}`}>
                <HStack>
                  <SingleDatepickerBackButtons
                    calendars={calendars}
                    getBackProps={getBackProps}
                  />
                  <Heading size="xs" textAlign="center">
                    {MONTH_NAMES[calendar.month]} {calendar.year}
                  </Heading>
                  <SingleDatepickerForwardButtons
                    calendars={calendars}
                    getForwardProps={getForwardProps}
                  />
                </HStack>
                <Divider />
                <SimpleGrid columns={7} spacing={1} textAlign="center">
                  {_.map(DAY_NAMES, (day) => (
                    <Box key={`${calendar.month}${calendar.year}${day}`}>
                      <Text fontSize="xs" fontWeight="semibold">
                        {day}
                      </Text>
                    </Box>
                  ))}
                  {_.map(calendar.weeks, (week, weekIndex) => {
                    return _.map(week, (dateObj: DateObj, index) => {
                      const {
                        date,
                        today,
                        prevMonth,
                        nextMonth,
                        selected
                      } = dateObj;

                      const key = `${calendar.month}${calendar.year}${weekIndex}${index}`;
                      const isDisabled = prevMonth || nextMonth;

                      const style = () => {
                        const obj: any = {
                          variant: "outline",
                          borderColor: "transparent"
                        };

                        if (today) {
                          obj.borderColor = "yellow.400";
                        }

                        if (selected) {
                          obj.bg = "yellow.200";
                        }

                        return obj;
                      };

                      return (
                        <Button
                          {...getDateProps({
                            dateObj,
                            disabled: isDisabled
                          })}
                          key={key}
                          size="xs"
                          {...style()}
                        >
                          {date.getDate()}
                        </Button>
                      );
                    });
                  })}
                </SimpleGrid>
              </VStack>
            );
          })}
        </HStack>
      </Center>
    </Box>
  );
};

export interface SingleDatepickerProps {
  value?: Date;
  disabled?: boolean;
  onChange: (date?: Date) => void;
}

export const SingleDatepicker = (props: SingleDatepickerProps) => {
  const { value, disabled, onChange } = props;

  const ref = React.useRef<HTMLElement>(null);
  const initialFocusRef = React.useRef<HTMLInputElement>(null);

  const [proposedDate, setProposedDate] = React.useState<string>(
    value ? dateFns.format(value, DATE_FORMAT) : ""
  );
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  useOutsideClick({
    ref: ref,
    handler: () => setPopoverOpen(false)
  });

  const onChangePrime = (date?: Date) => {
    onChange(date);
    if (date) {
      setProposedDate(dateFns.format(date, DATE_FORMAT));
    }
  };

  const onDateSelected = (options: { selectable: boolean; date: Date }) => {
    const { selectable, date } = options;

    if (!selectable) {
      return;
    }

    if (!_.isNil(date)) {
      onChangePrime(date);
      setPopoverOpen(false);
      return;
    }
  };

  const dayzedData = useDayzed({
    showOutsideDays: true,
    onDateSelected,
    selected: value
  });

  return (
    <Popover
      placement="bottom-start"
      variant="responsive"
      isOpen={popoverOpen}
      onClose={() => setPopoverOpen(false)}
      initialFocusRef={initialFocusRef}
      isLazy
    >
      <PopoverTrigger>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<FcCalendar />}
          />
          <Input
            bg="white"
            value={proposedDate}
            isDisabled={disabled}
            ref={initialFocusRef}
            onClick={() => setPopoverOpen(!popoverOpen)}
            onChange={(e) => {
              setProposedDate(e.target.value);
            }}
            onBlur={() => {
              const d = dateFns.parse(proposedDate, DATE_FORMAT, new Date());
              dateFns.isValid(d) ? onChangePrime(d) : onChangePrime(undefined);
            }}
          />
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent ref={ref}>
        <PopoverBody>
          <SingleDatepickerCalendar {...dayzedData} />
        </PopoverBody>
      </PopoverContent>
    </Popover >
  );
};
